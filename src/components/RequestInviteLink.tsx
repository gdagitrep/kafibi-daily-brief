import { AnchorHTMLAttributes, ReactNode } from "react";

type RequestInviteLinkProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const RequestInviteLink = ({
  children,
  href,
  ...props
}: RequestInviteLinkProps) => {
  const targetHref = href ?? "mailto:service@kabifi.com";

  return (
    <a href={targetHref} {...props}>
      {children}
    </a>
  );
};

export default RequestInviteLink;
