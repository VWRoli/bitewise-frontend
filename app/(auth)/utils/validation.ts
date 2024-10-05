export const passwordRules = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters',
  },
  validate: (value: string) => {
    const regex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return (
      regex.test(value) ||
      'Password must contain at least one uppercase letter, one lowercase letter, and one number or special character'
    );
  },
};
