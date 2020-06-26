// import sub from './sub'

import './app.scss'

const init = async () => {
  await asyncFn()
  console.log("This is a main js file.")
  jQuery()
  g = 0
}

async function asyncFn() {
  console.log('Im async function')
  console.log([1, 2, 3].includes(0))
}

init()

