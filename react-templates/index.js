console.log('nir');
document.addEventListener("DOMContentLoaded", function(event) {
     console.log("DOM fully loaded and parsed");
 });
// document.addEventListener("DOMContentLoaded", function() {
//   console.log('loaded');
// });
	var Hello = React.createClass({
			render: helloRT
	});
	ReactDOM.render(<Hello name="John" />, document.querySelector('.content'));
