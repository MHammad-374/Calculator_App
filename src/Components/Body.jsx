import React, { useState } from 'react'
import './Body.css'

function Body(props) {
  let numArr = ['C', '/', '*', 'Del', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '00', '0', '.']
  let c_back;
  let c_text;
  let c_output;
  if (props.theme === 'light') {
    c_back = '#ebedff'
    c_text = 'black'
    c_output = 'black'
  }
  else {
    c_back = '#121320'
    c_text = 'rgb(192, 192, 192)'
    c_output = 'white'
  }

  const [output, setOutput] = useState('0')



  let btnClicked = (btn) => {
    if (btn === 'C') {
      setOutput('0')
    }
    else if (btn === 'Del') {
      if (output.length > 1) {
        setOutput(output.slice(0, output.length - 1))
      }
      else {
        setOutput('0')
      }
    }
    else if (btn === '=') {
      setOutput(eval(output).toFixed(5))
    }
    else {
      if (output !== '0') {
        let a = output + btn
        setOutput(a)
      }
      else {
        setOutput(btn)
      }
    }
  }


  return (
    <div className={`box bg-${props.theme}`}>
      <div className="c-body">
        <div className='main' style={{ backgroundColor: c_back }}>
          <div className="output" style={{ color: c_output }}>{output}</div>
          {
            numArr.map((e, i) => {
              return (
                <>
                  <div
                    className={`number`}
                    onClick={() => btnClicked(e)}
                    style={
                      {
                        backgroundColor: c_back,
                        color: (
                          i === 0 ||
                          i === 1 ||
                          i === 2 ||
                          i === 3 ||
                          i === 7 ||
                          i === 11 ||
                          i === 15
                        ) ? 'rgb(3, 129, 233)' : c_text
                      }
                    }
                  >{e}</div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Body
