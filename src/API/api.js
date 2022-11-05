viewProductDetails = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url:window.$apiBaseUrl+User/selectoneProduct.php,
    //   headers: { 'content-type': 'application/json' },    
      data: product_id
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };