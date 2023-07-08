
type TBackToRegisterFormLinkProps = {
  back: () => void;
};

export const BackToRegisterFormLink = ({
  back,
}: TBackToRegisterFormLinkProps) => {
  return <button onClick={back}>Change phone number or email</button>;
};
