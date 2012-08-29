var profileSearchAttributes = [
							"id","firstName","lastName","industry","headline",
			     			"location","distance","currentShare","network",
			     			"summary","specialties","interests","positions",
			     			"skills","educations","phoneNumbers","imAccounts",
			     			"primaryTwitterAccount","date-of-birth","main-address",
			     			"pictureUrl","publicProfileUrl"
		     			];

function onLinkedInLoad() {
     IN.Event.on(IN, "auth", function(){
     	// user has been succesfully authenticated
     	IN.API.Profile("me")
     		.fields(profileSearchAttributes)
     		.result(addProfile);
     })
}

function getProfile(profile) {
     IN.API.PeopleSearch()
     	.params(profile)
     	.fields(profileSearchAttributes)
     	.result(recieveProfile);
}

function recieveProfile(profile) {
     member = profile.values[0] | profile;
     var validateMember = Members.find({id: member.id});

     if( validateMember.count() < 1 ) {
          addProfile(member);
     }
     else {
          updateProfile(member);
     }
}

function addProfile(profile) {
     Members.insert(profile);
}

function updateProfile(profile) {
     Members.update({ id: profile.id }, profile);
}