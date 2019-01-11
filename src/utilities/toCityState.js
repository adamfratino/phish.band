import Geocode from 'react-geocode'
Geocode.setApiKey('AIzaSyCzpin5OP1Ly_g9cTKmNtsE6HWTotvPiCk')

export function toCityState(lat, lon) {
  Geocode.fromLatLng(lat, lon).then(
    response => {
      let address = {}
      let results = response.results[0].address_components

      results.forEach((result, i) => {
        let component = response.results[0].address_components[i]

        if (component.types.includes('sublocality') || component.types.includes('locality')) {
          address.city = component.long_name
        } else if (component.types.includes('administrative_area_level_1')) {
          address.state = component.long_name
        } else if (component.types.includes('country')) {
          address.country = component.long_name
        }
      })

      // this.setState({
      //   address: `${address.city}, ${address.state}`
      // })
    },
    error => console.error(error)
  )
}
