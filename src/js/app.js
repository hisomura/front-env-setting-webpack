import 'js/sub'
import '@scss/app'

const init = async () => {
  await asyncFn()
  console.log("This is a main js file.")
  jQuery()
  utils.log('hello from app.js')
}

async function asyncFn() {
  console.log('Im async function')
  console.log([1, 2, 3].includes(0))
}

init()
