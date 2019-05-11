const knex = require('knex');
const bcrypt = require('bcryptjs');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('Users Endpoint', () => {
	let db;

	const testUsers = helpers.makeUsersArray();
	const testUser = testUsers[0];

	before('make knex instance', () => {
		db = knex({
			client: 'pg',
			connection: process.env.TEST_DB_URL
		});
		app.set('db', db);
	});

	after('disconnect from db', () => db.destroy());

	before('cleanup', () => helpers.cleanTables(db));

	afterEach('cleanup', () => helpers.cleanTables(db));

	describe('POST /api/users', () => {
		context('User validation', () => {
			beforeEach('insert users', () => helpers.seedUsers(db, testUsers));

			const requiredFields = ['email', 'username', 'pass'];

			requiredFields.forEach(field => {
				const registerAttemptBody = {
                    email: 'test email',
                    username: 'test username',
					pass: 'test pass'
				};

				it.only(`responds with 400 required error when '${field}' is missing`, () => {
					delete registerAttemptBody[field];

					return supertest(app)
						.post('/api/users')
						.send(registerAttemptBody)
						.expect(400, {
							error: `Missing '${field}' in request body`
						});
				});
			});

			it(`responds 400 'Password must be longer than 8 characters' when empty pass`, () => {
				const userShortPassword = {
					username: 'test username',
					pass: '1234567',
					email: 'test email'
				};
				return supertest(app)
					.post('/api/users')
					.send(userShortPassword)
					.expect(400, { error: `Password be longer than 8 characters` });
			});

			it(`responds 400 'Password be less than 72 characters' when long pass`, () => {
				const userLongPassword = {
					username: 'test username',
					pass: '*'.repeat(73),
					email: 'test email'
				};

				return supertest(app)
					.post('/api/users')
					.send(userLongPassword)
					.expect(400, { error: `Password be less than 72 characters` });
			});

			it(`responds 400 error when pass starts with spaces`, () => {
				const userPasswordStartsSpaces = {
					username: 'test username',
					pass: ' 1Aa!2Bb@',
					email: 'test email'
				};
				return supertest(app)
					.post('/api/users')
					.send(userPasswordStartsSpaces)
					.expect(400, {
						error: `Password must not start or end with empty spaces`
					});
			});

			it(`responds 400 error when pass ends with spaces`, () => {
				const userPasswordEndsSpaces = {
					username: 'test username',
					pass: '1Aa!2Bb@ ',
					email: 'test email'
				};
				return supertest(app)
					.post('/api/users')
					.send(userPasswordEndsSpaces)
					.expect(400, {
						error: `Password must not start or end with empty spaces`
					});
			});

			it(`responds 400 error when pass isn't complex enough`, () => {
				const userPasswordNotComplex = {
					username: 'test username',
					pass: '11AAaabb',
					email: 'test email'
				};
				return supertest(app)
					.post('/api/users')
					.send(userPasswordNotComplex)
					.expect(400, {
						error: `Password must contain 1 upper case, lower case, number and special character`
					});
			});

			it(`responds 400 'User name already taken' when username isn't unique`, () => {
				const duplicateUser = {
					username: testUser.username,
					pass: '11AAaa!!',
					email: 'test email'
				};
				return supertest(app)
					.post('/api/users')
					.send(duplicateUser)
					.expect(400, { error: `Username already taken` });
			});
		});
		context('Happy path', () => {
			it(`responds 201, serialized user, storing bcrypted pass`, () => {
				const newUser = {
					username: 'test username',
					pass: '11AAaa!!',
					email: 'test email'
				};

				return supertest(app)
					.post('/api/users')
					.send(newUser)
					.expect(201)
					.expect(res => {
						expect(res.body).to.have.property('id');
						expect(res.body.username).to.eql(newUser.username);
						expect(res.body.email).to.eql(newUser.email);
						expect(res.body).to.not.have.property('pass');
						expect(res.headers.location).to.eql(`/api/users/${res.body.id}`);
					})
					.expect(res => {
						db.from('users')
							.select('*')
							.where({ id: res.body.id })
							.first()
							.then(row => {
								expect(row.username).to.eql(newUser.username);
								expect(row.email).to.eql(newUser.email);
								return bcrypt.compare(newUser.pass, row.pass);
							})
							.then(compareMatch => {
								expect(compareMatch).to.be.true;
							});
					});
			});
		});
	});
});
