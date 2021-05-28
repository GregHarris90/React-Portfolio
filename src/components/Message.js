import React from "react";

function Message() {

    return (
        <div className="container">

            <div className="container card body col-sm-6">
                <div className="row">
                    <div className="col-sm">
                        <div className="text-primary">
                            <h1 className="text-uppercase">Contact:</h1>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Name</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Name" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Email" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" placeholder="Message"
                                            id="exampleFormControlTextarea1" rows="5"></textarea>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;