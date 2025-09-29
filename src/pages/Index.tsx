import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Simple Test Project (cool branch)
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              A clean, minimal starting point for your next great idea.
            </p>
          </div>

          {/* Main Card */}
          <Card className="shadow-card border-0 transition-all duration-300 hover:shadow-soft">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Ready to Build</h2>
                <p className="text-muted-foreground">
                  This is your blank canvas. Start creating something amazing with clean, modern design foundations already in place.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
                <Button variant="outline" className="border-border hover:bg-secondary">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Simple Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { title: "Clean Design", desc: "Modern, minimal aesthetics" },
              { title: "Responsive", desc: "Works on all devices" },
              { title: "Ready to Use", desc: "Start building immediately" }
            ].map((feature, index) => (
              <Card key={index} className="shadow-card border-0 transition-all duration-300 hover:shadow-soft">
                <CardContent className="p-6 text-center space-y-2">
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
