import React, { useEffect, useState } from 'react';



function Cadastro () {



    return (
        
        <div id="texto">
            <center><h1>É um desenvolvedor front-end e está em busca de oportunidades?</h1>
            <h2>Se cadastre e tenha seu currículo publicado nesse site.</h2>
            <p>Preencha seu cadastro e fique de olho no seu e-mail.</p>
            </center>
            

       

        <div className="container">
        <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom01"><b>First name</b></label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationCustom02"><b>Last name</b></label>
            <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationCustom03"><b>City</b></label>
            <input type="text" class="form-control" id="validationCustom03" required />
            <div class="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom04"><b>State</b></label>
            <select class="custom-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom05"><b>CEP</b></label>
            <input type="text" class="form-control" id="validationCustom05" required />
            <div class="invalid-feedback">
              Please provide a valid zip.
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
      </div>
      </div>
      
      
      
    
      

    );
}

export default Cadastro;