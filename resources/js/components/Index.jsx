import {useState, createRef} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import qs from 'qs';
import Navbar from '../Navbar/Navbar';

const Index = () => {

    const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    });

  const [user, setUser] = useState([])
  const postcodeRef = createRef()
  const api_keyRef = createRef()
  const [errors, setErrors] = useState(null)
  const [success, setSuccess] = useState(null)


  const onSubmit = ev => {
    ev.preventDefault()

    const payload = qs.stringify({
        'postcode': postcodeRef.current.value,
        'api_key': api_keyRef.current.value,
      });

    console.log(payload);

    axiosClient.post('/v1/postcodes', payload)
      .then(({data}) => {
        console.log(data);
        setUser(data.locations);
        setSuccess(data.status);
        setErrors(null);
          if(data){
            postcodeRef.current.value= "";
            api_keyRef.current.value= "";
          }
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);
        if (response.status) {
            setErrors(response.data.status)
            setSuccess(null);
            postcodeRef.current.value= "";
            api_keyRef.current.value= "";
        }
      })
  }

  return (

<div className="justify-content-center">
     <Navbar/>
     {/* <h4>h4. Bootstrap heading</h4> */}
      <div className="container mt-5 px-2">
          <div className="mb-2 d-flex justify-content-between align-items-center">
              <form className="row g-3" onSubmit={onSubmit}>
                  {errors && (
                      <div className="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>Message!</strong> {errors}.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                      </div>)}

                  {success && (
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>Message!</strong> {success}.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                      </div>)}

                  <div className="col-auto">
                      <label htmlFor="inputPassword2" className="visually-hidden">PostCode</label>
                      <input type="text" className="form-control" name='postcode' ref={postcodeRef} placeholder="PostCode" />
                  </div>

                  <div className="col-auto">
                      <label htmlFor="inputPassword2" className="visually-hidden">API KEY</label>
                      <input type="text" className="form-control" name='api_key' ref={api_keyRef} placeholder="API_KEY" />
                  </div>
                  <div className="col-auto">
                      <button type="submit" className="btn btn-primary mb-3 ">Search</button>
                  </div>
              </form>
          </div>

          {success && (
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
                          </tr>
                      </thead>
                      <tbody>
                          {user.map(({ ID, Lat, Long, Postcode, Street_Address }, index) => (
                              <tr key={index}>
                                  <th scope='row'></th>
                                  <td>{ID}</td>
                                  <td>{Lat}</td>
                                  <td><i className="bi bi-check2-circle green" /><span className="ms-1">{Long}</span>
                                  </td>
                                  <td>
                                      {Postcode}</td>
                                  <td>{Street_Address}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>)}
      </div>
</div>
  );
}

export default Index

