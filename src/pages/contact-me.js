import React from 'react';
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import H from '../components/mdxComponents/Headings';
import Box from '../components/mdxComponents/Box';

export default function ContactMePage() {
  return ( 
    <Layout>
      <Helmet>
        <title>{`Contactame — Juan Carlos Peña`}</title>
      </Helmet>
      <H>🔥 Contactame</H>
      <H as='h3'>
        ¿Tienes alguna duda o solicitud? Ponte en contacto y hagamos tus proyecto web una realidad
      </H>
      <Box>
        <H as='h3'>Formulario de contacto</H>
        <form>
          <input type='text' placeholder='Nombre completo' required="required"/>
          <input type='text' placeholder='Empresa'/>
          <input type='email' placeholder='Correo electronico' required="required"/>
          <input type='text' placeholder='Numero telefonico'/>
          <input type='text' placeholder='Asunto' required="required"/>
          <textarea rows="4"placeholder="Mensaje" required="required"/>
          <button type="submit" value='Enviar'>Enviar</button>

        </form>
      </Box>
    </Layout>
   );
}
