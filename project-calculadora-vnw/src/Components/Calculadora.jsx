// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';


// Estilizando com styled-components

// Definindo estilos globais
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black; /* Definindo o fundo como preto */
    color: white; /* Alterando a cor do texto para branco */
    font-family: Arial, sans-serif; 
  }
`;

const CalculatorContainer = styled.div`
max-width: 280px;
    margin: 0 auto; /* Centralizar horizontalmente */
    padding: 30px;
    border: 5px solid #fc6d00;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: black;
    
`;

const Display = styled.input`
     width: 100%;
    font-size: 30px;
    text-align: right;
    padding: 10px;
    margin-bottom: 5px;
    border: none; /* Remover a borda do input */
    background: none; 
    color: #f4eeee; /* Cor do texto branco */
`;

const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    button {
        padding: 15px;
        font-size: 26px;
        cursor: pointer;
        border: none; /* Remover a borda dos botões */
        border-radius: 25px; /* Deixar os botões mais redondos */
        background-color: #f76307; /* Cor de fundo preta */
        color: #0f0e0e; /* Cor do texto  */
    }
`;

const CalculatorTitle = styled.h1`
    font-family: 'Arial'; 
    font-size: 24px;
    text-transform: uppercase; /* Transformar o texto em maiúsculas */
`;

const Calculadora = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstValue, setFirstValue] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

 // Implementação da lógica para números
    const handleNumberClick = (num) => {
        if (displayValue === '0' || waitingForSecondValue) {
            setDisplayValue(num);
            setWaitingForSecondValue(false);
        } else {
            setDisplayValue(displayValue + num);
        }
    };

    // Implementação da lógica para operadores
    const handleOperatorClick = (op) => {
        if (operator !== null) {
            calculate();
        }
        setFirstValue(parseFloat(displayValue));
        setWaitingForSecondValue(true);
        setOperator(op);
    };

        // Implementação da lógica para cálculos
        const calculate = () => {
        const secondValue = parseFloat(displayValue);
        let result = 0;

        if (operator === '+') {
            result = firstValue + secondValue;
        } else if (operator === '-') {
            result = firstValue - secondValue;
        } else if (operator === 'x') { // Mudando 'x' para '*' para representar multiplicação
            result = firstValue * secondValue;
        } else if (operator === '/') {
            result = firstValue / secondValue;
        }

        setDisplayValue(result.toString());
        setFirstValue(result);
        setOperator(null);
    };

    // Implementação para o botão de igual
    const handleEqualClick = () => {
        calculate();
        setWaitingForSecondValue(true);
    };

    const handleClear = () => {
        setDisplayValue('0');
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecondValue(false);
    };

    const handleSignChange = () => {
        setDisplayValue((parseFloat(displayValue) * -1).toString());
    };

    const handlePercentage = () => {
        const currentValue = parseFloat(displayValue);
        const percentageValue = currentValue / 100;
        setDisplayValue(percentageValue.toString());
        setWaitingForSecondValue(true);
    };

    
    return (
        <CalculatorContainer>
            <GlobalStyle/>
          <CalculatorTitle>Calculadora do VnW</CalculatorTitle>
            <Display value={displayValue} readOnly />
            <Buttons>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleOperatorClick('()')}>( )</button>
                <button onClick={handlePercentage}>%</button>
                <button onClick={() => handleOperatorClick('/')}>/</button>

                <button onClick={() => handleNumberClick('7')}>7</button>
                <button onClick={() => handleNumberClick('8')}>8</button>
                <button onClick={() => handleNumberClick('9')}>9</button>
                <button onClick={() => handleOperatorClick('x')}>x</button>

                <button onClick={() => handleNumberClick('4')}>4</button>
                <button onClick={() => handleNumberClick('5')}>5</button>
                <button onClick={() => handleNumberClick('6')}>6</button>
                <button onClick={() => handleOperatorClick('-')}>-</button>

                <button onClick={() => handleNumberClick('1')}>1</button>
                <button onClick={() => handleNumberClick('2')}>2</button>
                <button onClick={() => handleNumberClick('3')}>3</button>
                <button onClick={() => handleOperatorClick('+')}>+</button>
                
                <button onClick={handleSignChange}>+/-</button>
                <button onClick={() => handleNumberClick('0')}>0</button>
                <button onClick={() => handleNumberClick(',')}>,</button>
                <button onClick={handleEqualClick}>=</button>
            </Buttons>
        </CalculatorContainer>
    );
};

export default Calculadora;

