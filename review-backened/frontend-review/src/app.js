fetch('http://localhost:5000/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.name,
      message: formData.message
    })
  })
  