import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Home, Search, Settings, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold">Huntiverse Connect</h2>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-6">
        <div className="grid gap-6 md:grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <aside className="flex flex-col space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-5 w-5" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-5 w-5" />
              Explore
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </aside>

          {/* Content Area */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Input placeholder="Search..." className="max-w-sm" />
                <Button>Search</Button>
              </div>

              <Tabs defaultValue="feed" className="w-full">
                <TabsList>
                  <TabsTrigger value="feed">Feed</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                </TabsList>
                <TabsContent value="feed">
                  <div className="grid gap-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <CardHeader>
                          <CardTitle>Post Title {i}</CardTitle>
                          <CardDescription>Posted by User {i}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>This is a sample post content. Replace with actual content.</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="trending">
                  <Card>
                    <CardHeader>
                      <CardTitle>Trending Content</CardTitle>
                      <CardDescription>Most popular content right now</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Trending content will be displayed here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="latest">
                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Updates</CardTitle>
                      <CardDescription>Most recent activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Latest updates will be displayed here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;