import { FirebaseError } from "firebase/app";

enum FirebaseErrorMsg {
  EmailAlreadyInUse = "auth/email-already-in-use",
  InvalidEmail = "auth/invalid-email",
  UserNotFound = "auth/user-not-found",
  WrongPassword = "auth/wrong-password",
}

export const errorMsg = (error: FirebaseError): string => {
  switch (error.code) {
    case FirebaseErrorMsg.InvalidEmail:
      return "E-mail inválido";

    case FirebaseErrorMsg.WrongPassword:
      return "Senha incorreta";

    case FirebaseErrorMsg.UserNotFound:
      return "Usuário não encontrado";

    case FirebaseErrorMsg.EmailAlreadyInUse:
      return "E-mail já cadastrado";

    default:
      return "Erro desconhecido:";
  }
};
