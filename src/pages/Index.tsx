import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Map, Trophy, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      {/* Navigation Bar */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <Compass className="h-8 w-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-orange-700">Huntiverse</h2>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            {user ? (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("/dashboard")}
              >
                <User className="h-5 w-5" />
              </Button>
            ) : (
              <Button 
                variant="default"
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => navigate("/login")}
              >
                Start Adventure
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-4">
            Embark on Epic Scavenger Hunts
          </h1>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Join exciting treasure hunts, solve mysterious clues, and discover hidden gems in your city.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Map className="w-12 h-12 mx-auto text-orange-500 mb-2" />
              <CardTitle className="text-orange-700">Explore Locations</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-600">
              Navigate through carefully crafted routes and discover new places
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Compass className="w-12 h-12 mx-auto text-orange-500 mb-2" />
              <CardTitle className="text-orange-700">Solve Clues</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-600">
              Test your wit with challenging riddles and mysterious hints
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Trophy className="w-12 h-12 mx-auto text-orange-500 mb-2" />
              <CardTitle className="text-orange-700">Win Prizes</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-orange-600">
              Complete hunts and earn rewards for your achievements
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        {!user && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
              onClick={() => navigate("/login")}
            >
              Join the Hunt
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;