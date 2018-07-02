// file app/models/user.js
// define the model for User 


// load the things we need

var bcrypt   = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('user', {
		localemail			: DataTypes.STRING,
		localpassword		: DataTypes.STRING,
		facebookid		   	: DataTypes.STRING,
		facebooktoken   	: DataTypes.STRING,
		facebookemail   	: DataTypes.STRING,
		facebookname    	: DataTypes.STRING,
		googleid		   	: DataTypes.STRING,
		googletoken        	: DataTypes.STRING,
		googleemail        	: DataTypes.STRING,
		googlename         	: DataTypes.STRING,
		windowsliveid		: DataTypes.STRING,
		windowslivetoken	: DataTypes.STRING(1024),
		windowsliveemail	: DataTypes.STRING,
		windowslivename		: DataTypes.STRING
	}, 
	{
		classMethods: {
			generateHash : function(password) {
				return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
			},			
		},
		instanceMethods: {			
			validPassword : function(password) {
				return bcrypt.compareSync(password, this.localpassword);
			}
		},
		getterMethods: {
			someValue: function() {
				return this.someValue;
			}
		},
		setterMethods: {
			someValue: function(value) {
				this.someValue = value;
			}
		}
	});
}


