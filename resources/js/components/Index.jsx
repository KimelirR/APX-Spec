import {useState, createRef} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import qs from 'qs';

const Index = () => {

    const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    });

  const [user, setUser] = useState([])
  const postcodeRef = createRef()
  const api_keyRef = createRef()
  const [errors, setErrors] = useState(null)


  const onSubmit = ev => {
    ev.preventDefault()

    // const payload = {
    //   email: postcodeRef.current.value,
    //   password: api_keyRef.current.value,
    // }

    const payload = qs.stringify({
        'postcode': postcodeRef.current.value,
        'api_key': api_keyRef.current.value,
      });

    console.log(payload);

    axiosClient.post('/v1/postcodes', payload)
      .then(({data}) => {
        console.log(data);
        setUser(data.locations)
        setErrors(data.status);
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);
        if (response.status) {
            setErrors(response.data.status)
        }
      })
  }

  return (

<div className="container mt-5 px-2">

    <div className="mb-2 d-flex justify-content-between align-items-center">

            <form className="row g-3" onSubmit={onSubmit}>
            {errors && (
                            <div className="danger">
                                <p>{errors}</p>
                            </div>
                          )}
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">PostCode</label>
                    <input type="text" className="form-control" name='postcode'  ref={postcodeRef} placeholder="PostCode"/>
                </div>

                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="visually-hidden">API KEY</label>
                    <input type="text" className="form-control" name='api_key' ref={api_keyRef} placeholder="API_KEY"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3 ">Search</button>
                </div>
            </form>
    </div>
    <div className="table-responsive">
        <table className="table table-responsive table-borderless">

            <thead>
                <tr className="bg-light">
                    <th scope="col" width="5%"></th>
                    <th scope="col" width="5%">ID</th>
                    <th scope="col" width="20%">Lat</th>
                    <th scope="col" width="10%">Long</th>
                    <th scope="col" width="20%">Postcode</th>
                    <th scope="col" width="20%">Street_Address</th>
                    {/* <th scope="col" className="text-end" width="20%">
                        <span>Revenue</span>
                    </th> */}
                </tr>
            </thead>
            <tbody>

            {user.map((u) => (
                <tr key={u.id}>
                    <th scope="row">{u.id}</th>
                    <td>{u.ID}</td>
                    <td>{u.Lat}</td>
                    <td><i className="fa fa-check-circle-o green"/><span className="ms-1">{u.Long}</span>
                    </td>
                    <td>
                    {u.Postcode}</td>
                    <td>{u.Street_Address}</td>

                </tr>
                ))}

                {/* <tr>
                    <th scope="row"></th>
                    <td>12</td>
                    <td>1 Oct, 21</td>
                    <td><i className="fa fa-check-circle-o green"/><span className="ms-1">Paid</span>
                    </td>
                    <td>
                        Althan Travis</td>
                    <td>Wirecard htmlFor figma</td>
                    <td className="text-end">
                        <span className="fw-bolder">$0.99</span>
                        <i className="fa fa-ellipsis-h  ms-2"/></td>
                </tr> */}
            </tbody>

        </table>

    </div>

</div>

  );
}

export default Index

