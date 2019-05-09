import React from 'react'

const SkinAppContext = React.createContext({
    routineSteps: [], 
    routineProducts: {}, 
    userSkinProfile: [], 
    addStep: () => {}, 
    deleteStep: () => {}, 
    updateSkinProfile: () => {}
})

export default SkinAppContext