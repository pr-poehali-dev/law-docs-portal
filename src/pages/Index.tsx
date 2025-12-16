import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш юрист свяжется с вами в ближайшее время.",
    });
    setIsDialogOpen(false);
  };

  const services = [
    {
      icon: 'FileText',
      title: 'Договоры',
      description: 'Подготовка и экспертиза договоров купли-продажи, аренды, подряда и других',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Scale',
      title: 'Судебные документы',
      description: 'Исковые заявления, жалобы, ходатайства для арбитражных и общих судов',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Building2',
      title: 'Корпоративные документы',
      description: 'Уставы, протоколы собраний, договоры для учредителей компаний',
      price: 'от 10 000 ₽'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Документы для сделок с недвижимостью, оформление прав собственности',
      price: 'от 7 000 ₽'
    },
    {
      icon: 'Users',
      title: 'Семейное право',
      description: 'Брачные договоры, соглашения о разделе имущества, алименты',
      price: 'от 6 000 ₽'
    },
    {
      icon: 'Briefcase',
      title: 'Трудовое право',
      description: 'Трудовые договоры, должностные инструкции, кадровые документы',
      price: 'от 4 000 ₽'
    }
  ];

  const blogPosts = [
    {
      title: 'Как правильно составить договор купли-продажи',
      date: '15 декабря 2024',
      excerpt: 'Основные требования к договору купли-продажи и типичные ошибки при его составлении.',
      readTime: '5 мин'
    },
    {
      title: 'Защита прав потребителей: что нужно знать',
      date: '10 декабря 2024',
      excerpt: 'Разбираем основные положения закона о защите прав потребителей и практику его применения.',
      readTime: '7 мин'
    },
    {
      title: 'Новые изменения в трудовом законодательстве 2024',
      date: '5 декабря 2024',
      excerpt: 'Обзор ключевых изменений в Трудовом кодексе, которые вступили в силу в этом году.',
      readTime: '6 мин'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={32} className="text-accent" />
              <span className="text-2xl font-bold">ЮрисПро</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('blog')} className="hover:text-accent transition-colors">Блог</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Контакты</button>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="secondary">
                    <Icon name="Send" size={16} className="mr-2" />
                    Оставить заявку
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Заявка на юридическую услугу</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и наш специалист свяжется с вами в течение 30 минут
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitRequest} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя *</label>
                      <Input required placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон *</label>
                      <Input required type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="example@mail.ru" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Тип услуги</label>
                      <select className="w-full px-3 py-2 border rounded-md bg-background">
                        <option>Договоры</option>
                        <option>Судебные документы</option>
                        <option>Корпоративные документы</option>
                        <option>Недвижимость</option>
                        <option>Семейное право</option>
                        <option>Трудовое право</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Описание задачи</label>
                      <Textarea placeholder="Кратко опишите вашу ситуацию..." rows={3} />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2 text-sm">
              Профессиональная юридическая поддержка
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Юридические документы<br />высшего качества
            </h1>
            <p className="text-xl mb-8 text-accent/90">
              Более 15 лет опыта в подготовке юридических документов. 
              Гарантируем соответствие законодательству и защиту ваших интересов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="transition-transform hover:scale-105">
                    <Icon name="Send" size={20} className="mr-2" />
                    Оставить заявку
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button size="lg" variant="outline" className="bg-transparent border-accent text-accent hover:bg-accent hover:text-primary" onClick={() => scrollToSection('contact')}>
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">15+ лет опыта</h3>
              <p className="text-muted-foreground">Успешная практика в различных отраслях права</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% гарантия</h3>
              <p className="text-muted-foreground">Юридическая чистота всех документов</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрое оформление</h3>
              <p className="text-muted-foreground">Подготовка документов от 1 рабочего дня</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексная подготовка юридических документов для физических лиц и бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Заказать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>{service.title}</DialogTitle>
                          <DialogDescription>
                            Заполните форму заявки на услугу
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmitRequest} className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Имя *</label>
                            <Input required placeholder="Иван Иванов" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Телефон *</label>
                            <Input required type="tel" placeholder="+7 (___) ___-__-__" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input type="email" placeholder="example@mail.ru" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Описание задачи</label>
                            <Textarea placeholder="Кратко опишите вашу ситуацию..." rows={3} />
                          </div>
                          <Button type="submit" className="w-full" size="lg">
                            <Icon name="Send" size={18} className="mr-2" />
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о праве и юридической практике
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Icon name="Clock" size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0 text-accent">
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Запись на консультацию</h2>
              <p className="text-xl text-muted-foreground">
                Выберите удобный формат и оставьте заявку
              </p>
            </div>

            <Tabs defaultValue="consultation" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="consultation">
                  <Icon name="Video" size={18} className="mr-2" />
                  Онлайн-консультация
                </TabsTrigger>
                <TabsTrigger value="appointment">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Запись на прием
                </TabsTrigger>
              </TabsList>

              <TabsContent value="consultation">
                <Card>
                  <CardHeader>
                    <CardTitle>Онлайн-консультация</CardTitle>
                    <CardDescription>
                      Получите квалифицированную юридическую консультацию не выходя из дома
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="example@mail.ru" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Тема консультации</label>
                      <Textarea placeholder="Опишите вашу ситуацию..." rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Первая консультация — бесплатно (до 30 минут)
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appointment">
                <Card>
                  <CardHeader>
                    <CardTitle>Запись на личный прием</CardTitle>
                    <CardDescription>
                      Запишитесь на встречу с юристом в нашем офисе
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя</label>
                        <Input placeholder="Иван Иванов" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Дата приема</label>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Удобное время</label>
                        <Input type="time" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Вопрос для обсуждения</label>
                      <Textarea placeholder="Кратко опишите вопрос..." rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Calendar" size={18} className="mr-2" />
                      Записаться на прием
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="MapPin" size={32} className="mx-auto mb-3 text-accent" />
                  <h3 className="font-bold mb-2">Адрес</h3>
                  <p className="text-sm text-muted-foreground">
                    г. Москва, ул. Тверская, д. 15
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Phone" size={32} className="mx-auto mb-3 text-accent" />
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-sm text-muted-foreground">
                    +7 (495) 123-45-67
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Mail" size={32} className="mx-auto mb-3 text-accent" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    info@jurispro.ru
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" size={28} className="text-accent" />
                <span className="text-xl font-bold">ЮрисПро</span>
              </div>
              <p className="text-sm text-accent/80">
                Профессиональная подготовка юридических документов с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-accent/80">
                <li>Договоры</li>
                <li>Судебные документы</li>
                <li>Корпоративные документы</li>
                <li>Недвижимость</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-accent/80">
                <li>О нас</li>
                <li>Наши юристы</li>
                <li>Отзывы клиентов</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-accent/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@jurispro.ru</li>
                <li>Пн-Пт: 9:00 - 19:00</li>
                <li>Сб: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm text-accent/60">
            <p>© 2024 ЮрисПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;