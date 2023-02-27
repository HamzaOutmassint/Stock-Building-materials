import React from 'react'

function ControllerPage() {
  return (
    <div className='pt-1 container mx-auto'>
        <div>
            <select name="list-of-blocs" id="list-of-blocs">
                <option value="bloc1-A">bloc A</option>
                <option value="bloc-B">bloc B</option>
                <option value="bloc-C">bloc C</option>
                <option value="bloc-E">bloc E</option>
                <option value="bloc-F">bloc F</option>
            </select>
        </div>
    </div>
  )
}

export default ControllerPage