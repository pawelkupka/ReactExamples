# Fetch

Fetch sluzy do komunikacji z API. Mo¿na rozne requesty. Jesli chce sie zrobic POST to trzeba dodac w request method POST i dodac wysy³ana tresd w body, np.

<code>
fetch("some url", {
	method: "POST",
	body: JSON.stringify({ some data })
})
.then(response => response.json())
.then(result => {}, error => {})
</code>