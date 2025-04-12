const firebaseConfig = {
  apiKey: "AIzaSyCtuCyM8YV3ZcHOdW0VFCIZT6GnVzn-BwC",
  authDomain: "pawpalace-12345.firebaseapp.com",
  projectId: "pawpalace-12345",
  storageBucket: "pawpalace-12345.appspot.com",
  messagingSenderId: "654164033202",
  appId: "1:654164033202:web:56d597cba203bade8e53ab"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

<div id="membershipBadge"></div>


  function loadMembership(userId) {
    db.collection("memberships").doc(userId).get().then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        let badgeImg = "";

        switch (data.offer) {
          case "Loyal Paw Prints":
            badgeImg = "images/ribbon.png";
            break;
          case "Adoption Heroes":
            badgeImg = "images/shield2.png";
            break;
          case "Senior Paw Perks":
            badgeImg = "images/crown.png";
            break;
          case "Book 10, Get 10% Off":
            badgeImg = "images/popper.png";
            break;
        }

        document.getElementById("membershipBadge").innerHTML = `
          <h2 class="text-xl font-bold text-blue-700">Your Membership</h2>
          <img src="${badgeImg}" alt="Badge" class="w-24 h-24 mx-auto mt-4">
          <p class="mt-2">${data.offer}</p>
        `;
      } else {
        document.getElementById("membershipBadge").innerText = "You haven’t joined a membership yet.";
      }
    });
  }
