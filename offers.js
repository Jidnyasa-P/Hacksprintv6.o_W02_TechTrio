function saveMembershipOffer(userId, offerName) {
  db.collection("memberships").add({
    userId: userId,
    offer: offerName,
    joinedAt: new Date()
  })
  .then((docRef) => {
    alert("Offer joined successfully!");
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}
