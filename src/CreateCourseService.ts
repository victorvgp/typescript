interface Course {
  name: string;
  // Ponto de interrogação "?" funcionar como rack para não ser obrigatorio
  duration?: number;
  educator: string;
}

class CreateCourseService {
  // Para passar valor DEFAULT é só colocar valor de igual "="
  execute({ duration = 8, educator, name }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
