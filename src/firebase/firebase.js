import firebase from '@firebase/app';
import '@firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAPnYS-VgFj69P7zWYtV2n2t3-i71RhpQI',
    authDomain: 'andrea-designs.firebaseapp.com',
    projectId: 'andrea-designs',
    storageBucket: 'andrea-designs.appspot.com',
    messagingSenderId: '716207809506',
    appId: '716207809506:web:afab9c27ad28b431f0cfbb',
    measurementId: 'G-6WHZEPB12R'
};

class Firebase{
    constructor(){
        firebase.initializeApp(firebaseConfig);
    }
}

export default Firebase;

/*// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();
const files = [ 'black-smiley.svg', 'check-smol.svg', 'left-arrow.svg', 'pixel-circle.svg', 'right-arrow.svg' ]; 
files.map( filename => {
    storage
      .ref( `/images/icons/${filename}` )
      .getDownloadURL()
      .then( url => {
        console.log( "Got download url: ", url );
      });
});*/


//other code
/*// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

// Create a storage reference from our storage service
const storageRef = storage.ref();

//create a child reference that points to 'images' in storage, then store data in imagesRef
const imagesRef = storageRef.child('images');

//create a child reference that points to 'pdfs' in storage, then store data in pdfsRef
const pdfsRef = storageRef.child('pdfs');

//create a child reference that points to 'videos' in storage, then store data in videosRef
const videosRef = storageRef.child('videos');

//create a child reference that points to 'images/icons' in storage, then store data in iconsRef
const iconsRef = storageRef.child('images/icons');

//create a child reference that points to 'images/misc' in storage, then store data in miscRef
const miscRef = storageRef.child('images/misc');

//create a child refernece that points to 'images/portfolio' in storage, then store data in portfolioRef
const portfolioRef = storageRef.child('images/portfolio');

export  {
    storage, storageRef, imagesRef, pdfsRef, videosRef, iconsRef, miscRef, portfolioRef, firebase as default
  }*/