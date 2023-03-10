import React from 'react'

function About(props) {
  let {title, colums, dataSource, loader} = props
  return (
    <>
      <h1>{title}</h1>
      {loader ?  (<img src='https://gifimage.net/wp-content/uploads/2018/04/loader-gif-32x32-7.gif'/>): dataSource && Array.isArray(dataSource) && dataSource.length < 1}
      <table>
        <thead>
        <tr>
          {colums && Array.isArray(colums) && colums.length > 0 ?
         colums.map((a, r) => (
           <th key={r}>{a.displayName}</th>
           )): null }
          </tr>
          </thead>
          <tbody>
             <tr>
              {dataSource && Array.isArray(dataSource) && dataSource.length > 0 ?
                dataSource.map((d , k) => (
                  <tr key={k}>
                    {colums.map((a , p) => (
                      <td key={p}>{d[a.key]}</td>
                    ))}
                  </tr>
                ))
              :null}
             </tr>
          </tbody>
      </table>
    </>
  )
}
export default About;
