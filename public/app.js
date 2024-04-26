document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
  const db = firebase.firestore();

  const myTask = db.collection('tasks').doc('x33vbZE1eIxOxhMP46sG');
  console.log(myTask, 'myTask')

  myTask.get()
    .then(doc => {
      const data = doc.data();
      document.write( data.name + `<br>`)
      document.write( data.completed )
    })
});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user, 'user')
      })
      .catch(console.log)

}