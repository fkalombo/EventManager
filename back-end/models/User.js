class User {
    constructor(UserId, Name, Surname, Email, EmailConfirmed, PasswordHash, UserName, DateOfBirth, GenderId) {
        this.UserId = UserId;
        this.Name = Name;
        this.Surname = Surname;
        this.Email = Email;
        this.EmailConfirmed = EmailConfirmed;
        this.PasswordHash = PasswordHash;
        this.UserName = UserName;
        this.DateOfBirth = DateOfBirth;
        this.GenderId = GenderId
    }
}

module.exports = User;