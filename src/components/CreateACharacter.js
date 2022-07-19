import { useState } from 'react'

const CreateACharacter = () => {
  const baseImgUrl = 'https://www.dndbeyond.com/attachments/thumbnails/0/'
  const portraitMap = {
    'barbarian': '679/400/417/c3barbarianintro.png',
    'bard': '684/400/406/c3bardintro.png',
    'cleric': '687/380/437/c3clericintro.png',
    'druid': '693/400/399/c3druidintro.png',
    'fighter': '697/400/475/c3fighterintro.png',
    'paladin': '701/400/473/c3paladinintro.png',
    'monk': '700/400/490/c3monkintro.png',
    'ranger': '707/400/444/c3rangerintro.png',
    'rogue': '709/375/480/c3rogueintro.png',
    'sorcerer': '712/400/517/c3sorcererintro.png',
    'wizard': '717/400/484/c3wizardintro.png',
    'warlock': '716/400/512/c3warlockintro.png'
  }

  const [selectedCharImg, setSelectedCharImg] = useState()

  const handleCharSelect = (e) => {
    setSelectedCharImg(`${baseImgUrl}${e.target.value}`)
  }

  return(
    <div>
      <h1 style={{textAlign: 'center'}}>Create A Character</h1>
      <div className="char-select-container">
        <div>
          <input type={'text'} className="char-name" placeholder='Name your character' /><br />
          <select onChange={handleCharSelect} className="class-select">
            {
              Object.keys(portraitMap).map((element) => {
                return(
                  <option value={portraitMap[element]}>{element}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <img src={selectedCharImg} className="selected-char-img" />
        </div>
      </div>
    </div>
  )
}

export default CreateACharacter;