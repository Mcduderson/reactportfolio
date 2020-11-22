import React from "react";

function Contact() {
    return (
        <main className="container my-5 ml-3 py-2">
            <section className="row">
                <article className="col-8">
                    <h1>Contact</h1>
                    <hr />
                </article>
            </section>
            <section className="row">
                <article className="col-8">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword2">Message</label>
                            <textarea type="text" className="form-control" id="exampleInputPassword1"></textarea>
                        </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </article>
            </section>
        </main>
    );
}

export default Contact;