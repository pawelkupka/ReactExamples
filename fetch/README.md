# Fetch

Fetch s³u¿y do komunikacji z API. Mo¿na ró¿ne requesty. Jeœli chce siê zrobiæ POST to trzeba dodaæ w request method POST i dodaæ wysy³an¹ treœæ w body, np.

fetch("some url", {
	method: "POST",
	body: JSON.stringify({ some data })
})
.then(response => response.json())
.then(result => {}, error => {})