import { Html, Body, Container, Text, Link, Preview, Heading } from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Heading as="h2" style={h2}>
            Contact Details:
          </Heading>
          <Text style={text}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link>
          </Text>

          <Heading as="h2" style={h2}>
            Message:
          </Heading>
          <Text style={text}>{message}</Text>

          <hr style={hr} />

          <Text style={footer}>Sent from your website contact form</Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#444',
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '1.25',
  marginTop: '32px',
  marginBottom: '16px',
};

const text = {
  color: '#555',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '8px 0',
};

const hr = {
  borderColor: '#ddd',
  marginTop: '48px',
  marginBottom: '16px',
};

const footer = {
  color: '#777',
  fontSize: '14px',
  fontStyle: 'italic',
  marginTop: '16px',
  textAlign: 'center' as const,
};
