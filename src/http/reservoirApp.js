import axios from "axios";

export const fetchReservoirs = async () => {
    const {data} = await axios.get('https://turkestan.panama.kz/api/general/menu/reservoirs', {
        headers: {
          'language': 'ru'
        }
    })
    return data
}
