import React from 'react'

export default function Quotebox(props) {
    return (
        <div className="quotebox">
            <div className="row align-items-end">
                <div className="col-md-8">
                    <h1>{props.title}</h1>
                </div>
                <div className="col-md-4">
                    <p>
                       {props.text}
                    </p>
                </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between block-bottom align-items-center">
                <div className="d-flex align-items-center">
                    <img src={props.img} alt={props.alt} />

                    <div className="flex-column d-flex">
                        <h3>{props.name}</h3>
                        <p>{props.position}</p>
                    </div>
                </div>

                <img src={props.client} alt="NY" />
            </div>
        </div>
    )
}
