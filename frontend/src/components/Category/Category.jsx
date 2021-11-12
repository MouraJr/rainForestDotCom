import React from 'react'
import Card from 'react-bootstrap/card';

const Category = ({ data }) => {
    if (data.length === 0) {
        return 'Loading...'
    }

    console.log(data);

    return (
        <div className='row justify-content-center'>
            {data ? data.map((item) =>
                <Card border="primary" className="m-4 p-3 p-sm-1 col-8 col-sm-6 col-md-3" key={item.id}>
                    <Card.Img variant="top" src={item.image_url} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.model}</Card.Text>
                        <Card.Text>{item.subcategory}</Card.Text>
                    </Card.Body>
                </Card>
            ) : null}
        </div>
    )
}

export default Category