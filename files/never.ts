function falloCritico(msn: string): never{
 throw new Error(msn);
}

falloCritico('El servidor se esta quemando con tu codigo');