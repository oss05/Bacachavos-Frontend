const RegisterFormMapper = data => {
console.log(data)
    return {
      password: data.values.password,
      countries : {
	    	idCountry : 1
    	},
      users: {
        iduser : data.values.email ,
        names :  data.values.firstName  ,
        fathersLastName : data.values.lastName ,
        mothersLastName : data.values.secondLastName ,
        email :  data.values.email,
        isCustomer : false,
        idSupervisor : null
        },
      customers : {
          isBorrower : data && data.values ? data.values.lender : false,
          isLender : data && data.values ? data.values.borrower : false
        }
      }
}

export default RegisterFormMapper;