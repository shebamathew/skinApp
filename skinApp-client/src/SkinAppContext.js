import React from 'react'

const SkinAppContext = React.createContext({
    routineSteps: [], 
    routineProducts: {}, 
    userSkinProfile: [], 
    addStep: () => {}, 
    deleteStep: () => {}, 
    updateSkinProfile: () => {}, 
    addProduct: () => {}, 
    deleteProduct: () => {}, 
    updateProduct: () => {}
})

export default SkinAppContext