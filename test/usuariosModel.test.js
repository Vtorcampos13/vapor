import sequelize from '../src/config/sequelize.js';
import usuariosModel from '../src/models/usuariosModel.js';

describe('usuariosModel Tests', () => {
  // Antes de todas las pruebas, sincroniza la base de datos
  beforeAll(async () => {
    await sequelize.sync();
  });

  // Después de todas las pruebas, cierra la conexión con la base de datos
  afterAll(async () => {
    await sequelize.close();
  });

  test('Crear un nuevo usuario', async () => {
    const user = await usuariosModel.create({
      nickname: 'testuser',
      email: 'testuser@example.com',
      password: 'testpassword',
    });

    // Verifica que el usuario se haya creado correctamente
    expect(user.nickname).toBe('testuser');
    expect(user.email).toBe('testuser@example.com');
  });
});
