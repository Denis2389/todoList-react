// src/CurrencyConverter.js

import axios from "axios";
import { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]); // список валют для выбора
  const [fromCurrency, setFromCurrency] = useState("USD"); // валюта "из"
  const [toCurrency, setToCurrency] = useState("EUR"); // валюта "в"
  const [amount, setAmount] = useState(1); // сумма для конвертации
  const [convertedAmount, setConvertedAmount] = useState(null); // результат конвертации
  const [rates, setRates] = useState({}); // курсы валют

  // Запрос к API для получения курсов валют при первой загрузке компонента
  useEffect(() => {
    axios
      .get("https://api.currencyfreaks.com/latest", {
        params: {
          apikey: "0e73619ee2d24fbdbc53e0aa726153ce", // Замените YOUR_API_KEY на ваш API ключ от CurrencyFreaks
        },
      })
      .then((response) => {
        setRates(response.data.rates); // сохраняем курсы валют
        setCurrencies(Object.keys(response.data.rates)); // создаем список валют для выпадающих списков
      })
      .catch((error) => console.error("Ошибка загрузки валют:", error));
  }, []);

  // Функция для выполнения конвертации валют
  const convertCurrency = () => {
    const rateFrom = rates[fromCurrency]; // курс валюты "из"
    const rateTo = rates[toCurrency]; // курс валюты "в"
    const result = (amount / rateFrom) * rateTo; // расчет результата конвертации
    setConvertedAmount(result); // сохраняем результат
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Конвертер валют</h2>
      
      {/* Поле для ввода суммы */}
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100px", padding: "5px", margin: "10px" }}
        />
        
        {/* Выпадающий список для выбора валюты "из" */}
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{ padding: "5px", margin: "10px" }}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        
        <span>в</span>
        
        {/* Выпадающий список для выбора валюты "в" */}
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={{ padding: "5px", margin: "10px" }}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
      {/* Кнопка для запуска конвертации */}
      <button onClick={convertCurrency} style={{ padding: "10px", margin: "10px" }}>
        Конвертировать
      </button>
      
      {/* Отображение результата конвертации, если он доступен */}
      {convertedAmount !== null && (
        <h3>
          Результат: {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </h3>
      )}
    </div>
  );
};

export default CurrencyConverter;
