# Fetch

Fetch s�u�y do komunikacji z API. Mo�na r�ne requesty. Je�li chce si� zrobi� POST to trzeba doda� w request method POST i doda� wysy�an� tre�� w body, np.

fetch("some url", {
	method: "POST",
	body: JSON.stringify({ some data })
})
.then(response => response.json())
.then(result => {}, error => {})