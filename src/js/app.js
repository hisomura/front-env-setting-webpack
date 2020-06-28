import 'js/sub'
// import '@scss/app'

setTimeout(() => {
  // import ('js/sub')
  import ('scss/app.scss')
}, 2000)

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

