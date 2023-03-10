const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
	PORT,
	() => console.log(`it's alive on http://localhost:${PORT}`)
)

// curl http://localhost:8080
app.get('/tshirt', (req, res) => {
	res.status(200).send({
		tshirt: '👕',
		size: 'large'
	})
});

// curl -d '{"logo":"🔥"}' -H "Content-Type: application/json" -X POST http://localhost:8080/tshirt/23
// curl https://ck-rest-api.fly.dev/tshirt
app.post('/tshirt/:id', (req, res) => {
	const { id } = req.params;
	const { logo } = req.body;

	if (!logo) {
		res.status(418).send({message: 'We need a logo!'})
	}

	res.send({
		tshirt: `👕 with your ${logo} and ID of ${id}`,
	});
});