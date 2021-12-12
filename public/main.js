const update = document.querySelector('#update-button')

  update.addEventListener('click', _ => {
    fetch('/auctions', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'bid successfull',
        price: 'new price to bid.'
      })
    }).then(res => {
        if (res.ok) return res.json()
      })
      .then(response => {
        window.location.reload(true)
      })
  })