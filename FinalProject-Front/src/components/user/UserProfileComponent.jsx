import React, { useState } from 'react'

const UserProfileComponent = () => {

const [menuOption, setMenuOption] = useState(0)


  return (
    <div>
      <div>
        <h2>Mis datos: </h2>
      </div>
      <div>
        <h2>Mi equipo Pokemon:</h2>
      </div>
    </div>
  )
}

export default UserProfileComponent