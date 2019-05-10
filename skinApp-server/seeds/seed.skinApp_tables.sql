BEGIN;

TRUNCATE
  skinApp_users,
  skinApp_products, 
  skinApp_skinProfiles, 
  skinApp_routine
  RESTART IDENTITY CASCADE;

INSERT INTO skinApp_users (email, username, pass) 
  VALUES
  ('dunder@pibulab.com', 'dunder', '$2a$12$QUHCYSD.c0cGyHMzgrGyl.1v4hV0Th0NXGZLGpqdJeAhWzgisb6MG'),
  ('snail@pibulab.com', 'snail',  '$2a$12$fx4BFJnLVKRnVWGgdLFHx.oCj5abDrjAuZQcVhIPm8KG0ih8UkDg2'),
  ('starfish@pibulab.com', 'starfish', '$2a$12$tR.Zs7/TgyzJvmY4mw4oZuzlNG5tzGl2nd7dnN1ihhNa7vfhLDXBe'); 


INSERT INTO skinApp_products (product_name, product_link, product_type)
VALUES
  ('Ursa Major Face Wash', 'https://www.amazon.com/Ursa-Major-Natural-Cruelty-Free-Cleanser/dp/B00652Y6MK/ref=sr_1_10?keywords=face+wash&qid=1556846016&refinements=p_72%3A2661618011&rnid=2661617011&s=gateway&sr=8-10', 
    'Cleanser'),
  ('Mizon All-In-One Snail Cream', 'https://www.peachandlily.com/products/all-in-one-snail-repair-cream', 
    'Moisturizer'),
  ('Shiseido Urban Environment Oil-Free UV Protector Broad Spectrum Face Sunscreen SPF 42',
    'https://www.sephora.com/product/urban-environment-oil-free-uv-protector-broad-spectrum-spf-42-for-face-P307405?om_mmc=ppc-GG_1533944608_60212794284_pla-296569923319_1452002_291191670138_9001999_c&country_switch=us&lang=en&ds_rl=1261471&gclid=CjwKCAjwqqrmBRAAEiwAdpDXtJly1nLZGNugKcjL4hk67GlNJQMpYFI2a8uCn967fK9rILk9RlLq5xoCBgMQAvD_BwE&gclsrc=aw.ds', 
    'Sunscreen'); 

INSERT INTO skinApp_skinProfiles (user_id, skin_type, climate, skin_tone, age)
VALUES
  (1, 'dehydrated', 'arid', 'Type IV', 25); 

INSERT INTO skinApp_routine (user_id, step_number, step_name, product_id)
VALUES
  (1, 1, 'Cleanse', 1), 
  (1, 2, 'Moisturize', 2), 
  (1, 3, 'Sunscreen', 3); 

COMMIT;
