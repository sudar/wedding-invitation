/**
 * The program that changed my life ;)
 *
 * @author: Sudar Muthu (http://sudarmuthu.com/wedding)
 */

(function () {

	var Sudar = new Person("Sudar"),
		Archana = new Person("Archana");

	isResponsible(Sudar); 

	gettingMarried({
		boy: Sudar, 
		girl: Archana,
		in: "YMCA Youth Center, 6/47, Ritherdon Road, Vepery, Chennai - 74",
		on: "February 6th, 2012",
		at: "9:00 AM - 10:30 AM. Reception: 6:00 PM - 9:00 PM"
	});

	isResponsible(Sudar);

	// Person Class
	function Person(name) {
		this.name = name;
		this.status = "single";
		this.responsibility = "none";
	}

	// The grant process
	function gettingMarried(args) {
		args.boy.responsibility = "all";
		args.boy.status = args.girl.status = "committed";
   	    	
		console.log("Expecting you with your family in " + args.in + 
				    " on " + args.on + 
				    " at " + args.at
				   );
	}

	// Check if the person is responsible
	function isResponsible(person) {
		return ((person.status === "single" || 
				 person.name === "Sudar") ? false : true);
	}
	
}());
