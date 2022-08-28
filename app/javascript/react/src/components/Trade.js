import React, { useEffect, useState } from "react"
import tradeService from "../services/tradeService"

const Trade = () => {
  const [trades, setTrades] = useState([])
  const [platform, setPlatform] = useState('nordnet')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const allTrades = await tradeService.getTrades()
      setTrades(allTrades.reverse())
    }
    fetchData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newTrade = await tradeService.createTrade({
        platform: platform,
        description: description
      })
      setPlatform('nordnet')
      setDescription('')
      setTrades([newTrade, ...trades])
    } catch (e) { console.error(e) }
  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
  }

  return (
    <div className="trade">
      <form onSubmit={handleSubmit}>
        <select>
          <option value="nordnet">NORDNET</option>
          <option value="degiro">DEGIRO</option>
        </select>
        <label>
          Description:<br />
          <textarea type="text" value={description} onChange={handleDescription} />
        </label>
        <button>Submit</button>
      </form>
      <div>
        {trades.map((t) => {
          return (
            <div key={t.id} className="trade-note">
              <div>Platform: {t.platform?.toUpperCase()}</div>
              <div>Description: {t.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trade
